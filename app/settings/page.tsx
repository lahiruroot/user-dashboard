import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function Settings() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
      <Card>
        <CardHeader>
          <CardTitle>Account Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Here you can manage your account settings. Add forms or options for user preferences here.</p>
        </CardContent>
      </Card>
    </div>
  )
}

