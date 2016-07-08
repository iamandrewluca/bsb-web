import { BsbWebPage } from './app.po';

describe('bsb-web App', function() {
  let page: BsbWebPage;

  beforeEach(() => {
    page = new BsbWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
