import { isAho, strToAho } from './aho';

export function handleRequest(req: Request) {
  const query = new URL(req.url).searchParams;
  const str = query.get('num');
  if (!str) return new Response('Set num query.', { status: 400 });

  const aho = isAho(str);
  const data = {
    num: Number(str),
    str,
    isAho: aho,
    text: aho ? strToAho(str) : undefined,
  };

  const json = JSON.stringify(data, null);

  return new Response(json, {
    headers: {
      'content-type': 'application/json;charset=UTF-8',
    },
  });
}

const worker: ExportedHandler<Bindings> = { fetch: handleRequest };

// Make sure we export the Counter Durable Object class
export default worker;
