import { Config } from '@backstage/config';

/** @public */
export class azureResourceConfig {
  constructor(
    public readonly tenantId: string,
    public readonly clientId: string,
    /**
     * @visibility secret
     */
    public readonly clientSecret: string,
    public readonly subscriptions: string[]
  ) {}

  static fromConfig(config: Config) : azureResourceConfig | null {
    const azConfig = config.getOptionalConfig('azureResources');
    return azConfig ? new azureResourceConfig(
      azConfig.getString('tenantId'),
      azConfig.getString('clientId'),
      azConfig.getString('clientSecret'),
      azConfig.getStringArray('subscriptions')
    ) : null;
  }
}