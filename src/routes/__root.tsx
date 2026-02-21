import { Outlet, createRootRoute, redirect } from '@tanstack/react-router'
import { lazy, Suspense } from 'react'
import { formDevtoolsPlugin } from '@tanstack/react-form-devtools'

import { getLocale, shouldRedirect } from '@/paraglide/runtime'
import { MainMenu } from '@/components/layout/main-menu'
import { PageHeader } from '@/components/layout/page-header'

const TanStackRouterDevtoolsPanel = lazy(() =>
  import('@tanstack/react-router-devtools').then((m) => ({
    default: m.TanStackRouterDevtoolsPanel,
  })),
)
const TanStackDevtools = lazy(() =>
  import('@tanstack/react-devtools').then((m) => ({
    default: m.TanStackDevtools,
  })),
)

export const Route = createRootRoute({
  beforeLoad: async () => {
    // Other redirect strategies are possible; see
    // https://github.com/TanStack/router/tree/main/examples/react/i18n-paraglide#offline-redirect
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('lang', getLocale())
    }

    // Client-side fallback redirect for SPA/file-router builds. Start apps should
    // prefer server-side paraglideMiddleware (see start template server.ts).
    if (typeof window !== 'undefined') {
      const decision = await shouldRedirect({ url: window.location.href })

      if (decision.redirectUrl) {
        throw redirect({ href: decision.redirectUrl.href })
      }
    }
  },

  component: () => (
    <main className="min-h-screen flex flex-col">
      <PageHeader />

      <MainMenu />
      <Outlet />
      <Suspense fallback={null}>
        <TanStackDevtools
          config={{
            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
            formDevtoolsPlugin(),
          ]}
        />
      </Suspense>
    </main>
  ),
})
