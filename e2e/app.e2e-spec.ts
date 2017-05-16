import { IntuslotPage } from './app.po';

describe('intuslot App', () => {
  let page: IntuslotPage;

  beforeEach(() => {
    page = new IntuslotPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
