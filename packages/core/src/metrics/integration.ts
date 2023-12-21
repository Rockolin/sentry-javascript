import type { ClientOptions, IntegrationFn } from '@sentry/types';
import type { BaseClient } from '../baseclient';
import { convertIntegrationFnToClass } from '../integration';
import { SimpleMetricsAggregator } from './simpleaggregator';

const INTEGRATION_NAME = 'MetricsAggregator';

const metricsAggregatorIntegration: IntegrationFn = () => {
  return {
    name: INTEGRATION_NAME,
    setup(client: BaseClient<ClientOptions>) {
      client.metricsAggregator = new SimpleMetricsAggregator(client);
    },
  };
};

/**
 * Enables Sentry metrics monitoring.
 *
 * @experimental This API is experimental and might having breaking changes in the future.
 */
// eslint-disable-next-line deprecation/deprecation
export const MetricsAggregator = convertIntegrationFnToClass(INTEGRATION_NAME, metricsAggregatorIntegration);
