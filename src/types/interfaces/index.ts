export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  specialProp?: string;
}

export interface customError extends Error {
  message: string;
  level: string;
}
