declare interface ENVIRONMENT {
  SITE_URL: string;
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
