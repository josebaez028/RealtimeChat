/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(auth)` | `/(auth)/signin` | `/(auth)/signup` | `/(tab)` | `/(tab)/chat` | `/(tab)/profile` | `/(tab)/request` | `/..\components\FormField` | `/..\components\message\BottomBar` | `/..\components\message\MessageInput` | `/..\components\message\MessageSection` | `/..\components\message\TopBar` | `/_sitemap` | `/chat` | `/profile` | `/request` | `/signin` | `/signup`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
