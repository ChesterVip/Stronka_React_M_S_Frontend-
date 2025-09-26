import { createBrowserRouter, Navigate } from 'react-router-dom'
import { lazy } from 'react'
import Layout from '@/components/Layout'
import LazyWrapper from '@/components/LazyWrapper'
import ErrorBoundary from '@/components/ErrorBoundary'
import ProtectedRoute from '@/components/ProtectedRoute'

// Lazy load all pages for better performance
const HomePage = lazy(() => import('@/pages/HomePage'))
const AboutPage = lazy(() => import('@/pages/AboutPage'))
const ServicesPage = lazy(() => import('@/pages/ServicesPage'))
const ExperiencePage = lazy(() => import('@/pages/ExperiencePage'))
const EducationPage = lazy(() => import('@/pages/EducationPage'))
const TechPage = lazy(() => import('@/pages/TechPage'))
const ContactPage = lazy(() => import('@/pages/ContactPage'))
const LoginPage = lazy(() => import('@/pages/LoginPage'))
const RegisterPage = lazy(() => import('@/pages/RegisterPage'))
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'))

// Future pages (commented out until implemented)
// const ProjectDetailsPage = lazy(() => import('@/pages/ProjectDetailsPage'))
// const BlogPage = lazy(() => import('@/pages/BlogPage'))
// const BlogPostPage = lazy(() => import('@/pages/BlogPostPage'))

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorBoundary><div /></ErrorBoundary>,
    children: [
      {
        index: true,
        element: (
          <LazyWrapper>
            <HomePage />
          </LazyWrapper>
        ),
      },
      {
        path: 'about',
        element: (
          <LazyWrapper>
            <AboutPage />
          </LazyWrapper>
        ),
      },
      {
        path: 'services',
        element: (
          <LazyWrapper>
            <ServicesPage />
          </LazyWrapper>
        ),
      },
      {
        path: 'experience',
        element: (
          <ProtectedRoute requireAuth={true}>
            <LazyWrapper>
              <ExperiencePage />
            </LazyWrapper>
          </ProtectedRoute>
        ),
      },
      {
        path: 'education',
        element: (
          <ProtectedRoute requireAuth={true}>
            <LazyWrapper>
              <EducationPage />
            </LazyWrapper>
          </ProtectedRoute>
        ),
      },
      {
        path: 'tech',
        element: (
          <ProtectedRoute requireAuth={true}>
            <LazyWrapper>
              <TechPage />
            </LazyWrapper>
          </ProtectedRoute>
        ),
      },
      {
        path: 'contact',
        element: (
          <LazyWrapper>
            <ContactPage />
          </LazyWrapper>
        ),
      },
      {
        path: 'login',
        element: (
          <LazyWrapper>
            <LoginPage />
          </LazyWrapper>
        ),
      },
      {
        path: 'register',
        element: (
          <LazyWrapper>
            <RegisterPage />
          </LazyWrapper>
        ),
      },
      {
        path: '404',
        element: (
          <LazyWrapper>
            <NotFoundPage />
          </LazyWrapper>
        ),
      },
      {
        path: '*',
        element: <Navigate to="/404" replace />,
      },
    ],
  },
])

export default router