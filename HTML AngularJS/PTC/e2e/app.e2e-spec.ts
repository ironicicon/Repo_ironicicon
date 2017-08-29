import { PTCPage } from './app.po';

describe('ptc App', function() {
  let page: PTCPage;

  beforeEach(() => {
    page = new PTCPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
