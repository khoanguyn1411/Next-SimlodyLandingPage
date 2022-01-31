declare interface ENVIRONMENT {
  PAGE_ID: string;
  APP_ID: string;
}

declare interface Window {
  __ENV__: ENVIRONMENT;
}

declare module "*.svg" {
  const content: React.ComponentType<
    React.SVGProps<SVGSVGElement> | CustomIconComponentProps
  >;
  export default content;
}
