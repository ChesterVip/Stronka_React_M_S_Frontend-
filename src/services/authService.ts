import api from './api';
import Cookies from 'js-cookie';

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: 'user' | 'admin';
  isEmailVerified: boolean;
  isPhoneVerified: boolean;
  isTwoFactorEnabled: boolean;
  isActive: boolean;
  authProvider: 'local' | 'google' | 'microsoft' | 'apple';
  avatar?: string;
  lastLoginAt?: string;
  createdAt: string;
  updatedAt: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone?: string;
}

export interface AuthResponse {
  user: User;
  accessToken: string;
  refreshToken: string;
}

export interface TwoFactorSetup {
  secret: string;
  qrCodeUrl: string;
}

class AuthService {
  private currentUser: User | null = null;

  // Login
  async login(loginData: LoginData): Promise<AuthResponse> {
    const response = await api.post('/auth/login', loginData);
    const { user, accessToken, refreshToken } = response.data;
    
    // Store tokens in cookies
    Cookies.set('access_token', accessToken, { expires: 1 }); // 1 day
    Cookies.set('refresh_token', refreshToken, { expires: 7 }); // 7 days
    
    this.currentUser = user;
    return response.data;
  }

  // Register
  async register(registerData: RegisterData): Promise<AuthResponse> {
    const response = await api.post('/auth/register', registerData);
    const { user, accessToken, refreshToken } = response.data;
    
    // Store tokens in cookies
    Cookies.set('access_token', accessToken, { expires: 1 });
    Cookies.set('refresh_token', refreshToken, { expires: 7 });
    
    this.currentUser = user;
    return response.data;
  }

  // Logout
  async logout(): Promise<void> {
    const refreshToken = Cookies.get('refresh_token');
    if (refreshToken) {
      try {
        await api.post('/auth/logout', { refreshToken });
      } catch (error) {
        console.error('Logout error:', error);
      }
    }
    
    // Clear tokens and user data
    Cookies.remove('access_token');
    Cookies.remove('refresh_token');
    this.currentUser = null;
  }

  // Get current user
  getCurrentUser(): User | null {
    return this.currentUser;
  }

  // Check if user is authenticated
  isAuthenticated(): boolean {
    const token = Cookies.get('access_token');
    return !!token && !!this.currentUser;
  }

  // Check if user is admin
  isAdmin(): boolean {
    return this.currentUser?.role === 'admin';
  }

  // Verify email
  async verifyEmail(token: string): Promise<void> {
    await api.post('/auth/verify-email', { token });
  }

  // Enable 2FA
  async enableTwoFactor(): Promise<TwoFactorSetup> {
    const response = await api.post('/auth/enable-2fa');
    return response.data;
  }

  // Verify 2FA setup
  async verifyTwoFactor(token: string): Promise<void> {
    await api.post('/auth/verify-2fa', { token });
  }

  // Verify 2FA login
  async verifyTwoFactorLogin(userId: string, token: string): Promise<boolean> {
    const response = await api.post('/auth/verify-2fa-login', { userId, token });
    return response.data.isValid;
  }

  // OAuth URLs
  getGoogleAuthUrl(): string {
    return 'http://localhost:3001/api/auth/google';
  }

  getMicrosoftAuthUrl(): string {
    return 'http://localhost:3001/api/auth/microsoft';
  }

  getAppleAuthUrl(): string {
    return 'http://localhost:3001/api/auth/apple';
  }

  // Forgot Password
  async forgotPassword(email: string): Promise<void> {
    await api.post('/auth/forgot-password', { email });
  }

  // Reset Password
  async resetPassword(token: string, password: string): Promise<void> {
    await api.post('/auth/reset-password', { token, password });
  }

  // Initialize user from stored token
  async initializeUser(): Promise<User | null> {
    const token = Cookies.get('access_token');
    if (!token) {
      return null;
    }

    try {
      // Try to get user info from a protected endpoint
      const response = await api.get('/users/me');
      this.currentUser = response.data;
      return this.currentUser;
    } catch (error) {
      // Token might be invalid, clear it
      Cookies.remove('access_token');
      Cookies.remove('refresh_token');
      return null;
    }
  }
}

export default new AuthService();
