import { PrettyurlPipe } from './pretty_url.pipe';

describe('pretty url pipe', () => {
  it('create an instance', () => {
    const pipe = new PrettyurlPipe();
    expect(pipe).toBeTruthy();
  });
});
