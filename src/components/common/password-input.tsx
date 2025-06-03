import * as React from 'react';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Eye, EyeOff } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Control, FieldPath, FieldValues } from 'react-hook-form';

interface PasswordInputProps<T extends FieldValues> {
  name: FieldPath<T>;
  label: string;
  placeholder?: string;
  control: Control<T>;
}

export function PasswordInput<T extends FieldValues>(props: PasswordInputProps<T>) {
  const { name, label, placeholder = '********', control } = props;
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false); // State to control visibility

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <FormField
      control={control}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl className="relative">
            <div>
              <Input
                type={isPasswordVisible ? 'text' : 'password'}
                placeholder={placeholder}
                {...field}
                name={name}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute top-1/2 right-3 -translate-y-1/2 transform"
                aria-label="Toggle password visibility"
              >
                {isPasswordVisible ? (
                  <EyeOff className="text-muted-foreground h-5 w-5" />
                ) : (
                  <Eye className="text-muted-foreground h-5 w-5" />
                )}
              </button>
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
      name={name}
    />
  );
}
