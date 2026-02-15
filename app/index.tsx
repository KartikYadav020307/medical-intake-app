import { Redirect } from 'expo-router';

export default function Index() {
  // Redirect to login on app launch
  // In a real app, check auth state here and redirect to (tabs) if authenticated
  return <Redirect href="/login" />;
}
