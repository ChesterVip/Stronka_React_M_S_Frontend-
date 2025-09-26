import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import AnimatedSection from '../components/ui/AnimatedSection';
import LoadingSpinner from '../components/ui/LoadingSpinner';

const AuthCallbackPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { setUser } = useAuth();
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const handleCallback = async () => {
      try {
        const token = searchParams.get('token');
        const refresh = searchParams.get('refresh');

        if (!token || !refresh) {
          throw new Error('Brak tokenów autoryzacji');
        }

        // Store tokens
        localStorage.setItem('access_token', token);
        localStorage.setItem('refresh_token', refresh);

        // Set user in auth context
        // Note: You might need to fetch user data from backend
        setUser({
          id: 'temp',
          email: 'user@example.com',
          firstName: 'User',
          lastName: 'Name',
          role: 'user',
          isEmailVerified: true,
          isPhoneVerified: false,
          isTwoFactorEnabled: false,
          isActive: true,
          authProvider: 'google',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        });

        setStatus('success');
        setMessage('Logowanie zakończone pomyślnie!');

        // Redirect to home page after 2 seconds
        setTimeout(() => {
          navigate('/');
        }, 2000);
      } catch (error: any) {
        setStatus('error');
        setMessage(error.message || 'Wystąpił błąd podczas logowania');
        
        // Redirect to login page after 3 seconds
        setTimeout(() => {
          navigate('/login');
        }, 3000);
      }
    };

    handleCallback();
  }, [searchParams, navigate, setUser]);

  return (
    <AnimatedSection animation="slide-up" threshold={0.3}>
      <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full">
          <Card variant="glass">
            <CardHeader>
              <CardTitle className="text-center text-white">
                {status === 'loading' && 'Logowanie...'}
                {status === 'success' && 'Sukces!'}
                {status === 'error' && 'Błąd'}
              </CardTitle>
              <CardDescription className="text-center text-gray-400">
                {status === 'loading' && 'Przetwarzanie danych autoryzacji'}
                {status === 'success' && 'Zostaniesz przekierowany na stronę główną'}
                {status === 'error' && 'Zostaniesz przekierowany na stronę logowania'}
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              {status === 'loading' && (
                <div className="flex justify-center">
                  <LoadingSpinner size="lg" />
                </div>
              )}
              
              {status === 'success' && (
                <div className="text-green-400">
                  <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-lg font-semibold">Logowanie zakończone pomyślnie!</p>
                </div>
              )}
              
              {status === 'error' && (
                <div className="text-red-400">
                  <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <p className="text-lg font-semibold">Wystąpił błąd</p>
                </div>
              )}
              
              <p className="mt-4 text-gray-300">{message}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default AuthCallbackPage;
