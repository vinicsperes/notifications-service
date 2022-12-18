import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['renewed-rattler-9891-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'cmVuZXdlZC1yYXR0bGVyLTk4OTEkVS7QLfgCCtFJL-KU36cBk-kNAgq8IdwOyG8',
          password:
            'p00NksaYF9x2jXLqIXKd0qoHiOblk-9clFMqZGCikXUBQiCGLnSLhveMnIBoieQ4FwGuxA==',
        },
        ssl: true,
      },
    });
  }
  async onModuleDestroy() {
    await this.close();
  }
}
