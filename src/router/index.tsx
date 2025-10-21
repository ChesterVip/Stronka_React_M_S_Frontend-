import { createBrowserRouter, Navigate } from 'react-router-dom'
import { lazy } from 'react'
import Layout from '@/components/Layout'
import LazyWrapper from '@/components/LazyWrapper'
import ErrorBoundary from '@/components/ErrorBoundary'

// Lazy load all pages for better performance
const HomePage = lazy(() => import('@/pages/HomePage'))
const AboutPage = lazy(() => import('@/pages/AboutPage'))
const ServicesPage = lazy(() => import('@/pages/ServicesPage'))
const ExperiencePage = lazy(() => import('@/pages/ExperiencePage'))
const EducationPage = lazy(() => import('@/pages/EducationPage'))
const TechPage = lazy(() => import('@/pages/TechPage'))
const ContactPage = lazy(() => import('@/pages/ContactPage'))
const CookiePolicyPage = lazy(() => import('@/pages/CookiePolicyPage'))
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'))

// Future pages (commented out until implemented)
// const ProjectDetailsPage = lazy(() => import('@/pages/ProjectDetailsPage'))
// const BlogPage = lazy(() => import('@/pages/BlogPage'))
// const BlogPostPage = lazy(() => import('@/pages/BlogPostPage'))

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorBoundary>{null}</ErrorBoundary>,
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
          <LazyWrapper>
            <ExperiencePage />
          </LazyWrapper>
        ),
      },
      {
        path: 'education',
        element: (
          <LazyWrapper>
            <EducationPage />
          </LazyWrapper>
        ),
      },
      {
        path: 'tech',
        element: (
          <LazyWrapper>
            <TechPage />
          </LazyWrapper>
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
        path: 'cookies',
        element: (
          <LazyWrapper>
            <CookiePolicyPage />
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
