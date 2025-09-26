import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useLanguage } from '../hooks/useLanguage';
import LoginRequired from './LoginRequired';

interface ProtectedRouteProps {
  children: ReactNode;
  requireAuth?: boolean;
  requireAdmin?: boolean;
}

const ProtectedRoute = ({ 
  children, 
  requireAuth = false, 
  requireAdmin = false
}: ProtectedRouteProps) => {
  const { isAuthenticated, isAdmin, isLoading } = useAuth();
  const { t } = useLanguage();
  const location = useLocation();

  // Show loading spinner while checking auth
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gold-500"></div>
      </div>
    );
  }

  // Show login required page if authentication is required but user is not authenticated
  if (requireAuth && !isAuthenticated) {
    // Custom login pages based on route
    if (location.pathname === '/experience') {
      return (
        <LoginRequired 
          title={t.login_required.experience.title}
          subtitle={t.login_required.experience.subtitle}
          description={t.login_required.experience.description}
        />
      );
    }
    
    if (location.pathname === '/education') {
      return (
        <LoginRequired 
          title={t.login_required.education.title}
          subtitle={t.login_required.education.subtitle}
          description={t.login_required.education.description}
        />
      );
    }
    
    if (location.pathname === '/tech') {
      return (
        <LoginRequired 
          title={t.login_required.tech.title}
          subtitle={t.login_required.tech.subtitle}
          description={t.login_required.tech.description}
        />
      );
    }
    
    // Default login required page
    return <LoginRequired />;
  }

  // Redirect to home if admin is required but user is not admin
  if (requireAdmin && !isAdmin) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
