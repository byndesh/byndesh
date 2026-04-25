import { makeRouteHandler } from '@keystatic/next/route-handler';
import config from '../../../../keystatic.config';

export const { GET, POST } = process.env.NEXT_PHASE === 'phase-production-build'
  ? {
      GET: () => new Response('OK'),
      POST: () => new Response('OK')
    }
  : makeRouteHandler({ config });
