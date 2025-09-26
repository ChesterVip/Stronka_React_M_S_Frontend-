import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';
import { Card, CardContent } from './ui/Card';
import Button from './ui/Button';
import AnimatedSection from './ui/AnimatedSection';

interface LoginRequiredProps {
  title?: string;
  subtitle?: string;
  description?: string;
}

const LoginRequired = ({ 
  title, 
  subtitle, 
  description
}: LoginRequiredProps) => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  // Use provided props or fallback to translations
  const finalTitle = title || t.login_required.default.title;
  const finalSubtitle = subtitle || t.login_required.default.subtitle;
  const finalDescription = description || t.login_required.default.description;

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full">
        <AnimatedSection animation="fade-in" threshold={0.3}>
          <div className="text-center mb-12">
            {/* Animated Lock Icon */}
            <div className="mb-8">
              <div className="relative inline-block">
                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-gold-500/20 to-gold-600/20 rounded-full flex items-center justify-center border-2 border-gold-500/30 animate-pulse">
                  <i className="fas fa-lock text-6xl text-gold-400 animate-bounce"></i>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center animate-ping">
                  <i className="fas fa-exclamation text-white text-sm"></i>
                </div>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 bg-clip-text text-transparent">
              {finalTitle}
            </h1>

            {/* Subtitle */}
            <h2 className="text-2xl md:text-3xl text-gray-300 mb-8 font-medium">
              {finalSubtitle}
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed mb-12">
              {finalDescription}
            </p>
          </div>
        </AnimatedSection>

        {/* Features Cards */}
        <AnimatedSection animation="slide-up" delay={200} threshold={0.3}>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card variant="glass" hover="glow" className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 mx-auto bg-blue-500/20 rounded-full flex items-center justify-center mb-4">
                  <i className="fas fa-user-shield text-2xl text-blue-400"></i>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{t.login_required.features.security.title}</h3>
                <p className="text-gray-400 text-sm">{t.login_required.features.security.description}</p>
              </CardContent>
            </Card>

            <Card variant="glass" hover="glow" className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 mx-auto bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                  <i className="fas fa-star text-2xl text-green-400"></i>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{t.login_required.features.exclusive.title}</h3>
                <p className="text-gray-400 text-sm">{t.login_required.features.exclusive.description}</p>
              </CardContent>
            </Card>

            <Card variant="glass" hover="glow" className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 mx-auto bg-purple-500/20 rounded-full flex items-center justify-center mb-4">
                  <i className="fas fa-cog text-2xl text-purple-400"></i>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{t.login_required.features.personalization.title}</h3>
                <p className="text-gray-400 text-sm">{t.login_required.features.personalization.description}</p>
              </CardContent>
            </Card>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection animation="slide-up" delay={400} threshold={0.3}>
          <div className="text-center">
            <Card variant="gradient" className="max-w-2xl mx-auto">
              <CardContent className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {t.login_required.cta.title}
                  </h3>
                  <p className="text-gray-300 mb-6">
                    {t.login_required.cta.subtitle}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={() => navigate('/login')}
                    size="lg"
                    className="group relative overflow-hidden"
                  >
                    <i className="fas fa-sign-in-alt mr-2 group-hover:rotate-12 transition-transform duration-300" />
                    {t.login_required.cta.login_btn}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  </Button>

                  <Button
                    variant="outline"
                    onClick={() => navigate('/register')}
                    size="lg"
                    className="group"
                  >
                    <i className="fas fa-user-plus mr-2 group-hover:scale-110 transition-transform duration-300" />
                    {t.login_required.cta.register_btn}
                  </Button>
                </div>

                <div className="mt-6 p-4 bg-gold-500/10 border border-gold-500/20 rounded-lg">
                  <h4 className="text-gold-400 font-semibold mb-2">{t.login_required.cta.test_account}</h4>
                  <p className="text-sm text-gray-300">
                    <strong>{t.login_required.cta.test_email}</strong><br />
                    <strong>{t.login_required.cta.test_password}</strong>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </AnimatedSection>

        {/* Background Animation */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default LoginRequired;
