import Link from 'next/link';

import { Button } from '@/button/Button';
import { FormElement } from '@/form/FormElement';
import { Label } from '@/form/Label';
import { FullCenterSection } from '@/layout/FullCenterSection';

const LoginForm = () => (
  <FullCenterSection title="Sign in to your account">
    <form className="grid gap-y-2">
      <Label htmlFor="email">Email</Label>
      <FormElement>
        <input id="email" type="text" />
      </FormElement>

      <Label htmlFor="password">Password</Label>
      <FormElement>
        <input id="password" type="password" />
      </FormElement>

      <div className="mt-3">
        <button type="submit" className="w-full">
          <Button full>Sign in</Button>
        </button>
      </div>
    </form>

    <div className="mt-5 text-center text-xs">
      <div>
        <Link
          href="/forgot-password"
          className="text-primary-500 hover:text-primary-600"
        >
          Forgot your password?
        </Link>
      </div>
      {/* <div>
        Don&apos;t have an account?{' '}
        <Link
          href="/signup"
          className="text-primary-500 hover:text-primary-600"
        >
          Sign up now
        </Link>
        .
      </div> */}
    </div>
  </FullCenterSection>
);

export { LoginForm };
