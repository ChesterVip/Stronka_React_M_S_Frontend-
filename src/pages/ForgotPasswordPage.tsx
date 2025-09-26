import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Button from '../components/ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import AnimatedSection from '../components/ui/AnimatedSection';
import authService from '../services/authService';

const ForgotPasswordPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [step, setStep] = useState<'request' | 'reset'>('request');

  const token = searchParams.get('token');

  useEffect(() => {
    if (token) {
      setStep('reset');
    }
  }, [token]);

  const handleRequestReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setSuccess('');

    try {
      await authService.forgotPassword(email);
      setSuccess('Jeśli podany email istnieje, otrzymasz link do resetowania hasła.');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Wystąpił błąd podczas wysyłania emaila');
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setSuccess('');

    if (password !== confirmPassword) {
      setError('Hasła nie są identyczne');
      setIsLoading(false);
      return;
    }

    if (password.length < 6) {
      setError('Hasło musi mieć co najmniej 6 znaków');
      setIsLoading(false);
      return;
    }

    try {
      await authService.resetPassword(token!, password);
      setSuccess('Hasło zostało zresetowane pomyślnie! Zostaniesz przekierowany na stronę logowania.');
      setTimeout(() => {
        navigate('/login');
      }, 3000);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Wystąpił błąd podczas resetowania hasła');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatedSection animation="slide-up" threshold={0.3}>
      <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-bold text-white">
              {step === 'request' ? 'Resetuj hasło' : 'Ustaw nowe hasło'}
            </h2>
            <p className="mt-2 text-sm text-gray-400">
              {step === 'request' 
                ? 'Wprowadź swój email, aby otrzymać link do resetowania hasła'
                : 'Wprowadź nowe hasło'
              }
            </p>
          </div>

          <Card variant="glass" className="mt-8">
            <CardHeader>
              <CardTitle className="text-center text-white">
                {step === 'request' ? 'Reset hasła' : 'Nowe hasło'}
              </CardTitle>
              <CardDescription className="text-center text-gray-400">
                {step === 'request' 
                  ? 'Otrzymasz email z linkiem do resetowania'
                  : 'Ustaw nowe bezpieczne hasło'
                }
              </CardDescription>
            </CardHeader>
            <CardContent>
              {error && (
                <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-3 text-red-400 text-sm mb-4">
                  {error}
                </div>
              )}

              {success && (
                <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-3 text-green-400 text-sm mb-4">
                  {success}
                </div>
              )}

              {step === 'request' ? (
                <form onSubmit={handleRequestReset} className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                      placeholder="twoj@email.com"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full"
                    size="lg"
                  >
                    {isLoading ? 'Wysyłanie...' : 'Wyślij link resetujący'}
                  </Button>
                </form>
              ) : (
                <form onSubmit={handleResetPassword} className="space-y-6">
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                      Nowe hasło
                    </label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                      placeholder="Minimum 6 znaków"
                    />
                  </div>

                  <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-2">
                      Potwierdź hasło
                    </label>
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      required
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                      placeholder="Powtórz hasło"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full"
                    size="lg"
                  >
                    {isLoading ? 'Resetowanie...' : 'Resetuj hasło'}
                  </Button>
                </form>
              )}

              <div className="mt-6 text-center">
                <button
                  onClick={() => navigate('/login')}
                  className="text-gold-400 hover:text-gold-300 font-medium text-sm"
                >
                  ← Powrót do logowania
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ForgotPasswordPage;
