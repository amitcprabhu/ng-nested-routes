import { TestSamplePage } from './app.po';

describe('test-sample App', function() {
  let page: TestSamplePage;

  beforeEach(() => {
    page = new TestSamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
