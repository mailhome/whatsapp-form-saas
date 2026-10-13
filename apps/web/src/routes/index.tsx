import LandingLayout from "@/components/layout/landing-layout"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/")({ component: App })

function App() {
  return (
    <LandingLayout>
      Here
    </LandingLayout>
  )
}
