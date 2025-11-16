import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Toaster } from 'sonner'
import { useAuthStore } from "./auth/store/auth.store"
import { RouterProvider } from 'react-router'
import { appRouter } from './router/app.router'
import type { PropsWithChildren } from 'react'

const queryClient = new QueryClient()

//Para usar tanstack antes de definirlo
const CheckAuthProvider = ({children}: PropsWithChildren) => {

  const { checkAuthStatus } = useAuthStore()

  const {isLoading} = useQuery({
    queryKey: ['auth'],
    queryFn: checkAuthStatus,
    retry: false,
    refetchInterval: 1000 * 60 * 1.5, //se revalida cada hora y media en caso de que no se refresque el navegador, porque sino se valida inmediatamente
    refetchOnWindowFocus: true
  })

  //console.log(data)

  if(isLoading) return <>Cargando...</>

  return children
}

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster/>

      <CheckAuthProvider>
        <RouterProvider router={appRouter}/>
      </CheckAuthProvider>

      <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>
  )
}

export default App
