import { datadogRum } from '@datadog/browser-rum';

datadogRum.init({
  applicationId: '70c3543a-54c8-4ce5-895e-1159149c41ed',
  clientToken: 'pubdb1a94cb004650fe252da6defa7ef20d',
  // `site` refers to the Datadog site parameter of your organization
  // see https://docs.datadoghq.com/getting_started/site/
  site: 'datadoghq.com',
  service: 'chatter',
  env: 'production',
  // Specify a version number to identify the deployed version of your application in Datadog
  // version: '1.0.0',
  sessionSampleRate: 100,
  sessionReplaySampleRate: 20,
  trackUserInteractions: true,
  trackResources: true,
  trackLongTasks: true,
  defaultPrivacyLevel: 'mask-user-input',
});

export function DatadogInit() {
  // Render nothing - this component is only included so that the init code
  // above will run client-side
  return null;
}
