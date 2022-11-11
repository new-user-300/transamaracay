import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
export const BACKEND_URL: string = publicRuntimeConfig.NEXT_PUBLIC_BACKEND_URL;
