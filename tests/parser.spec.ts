import parseHtmlToNotionBlocks from '../src/lib/parser';
import rawHtmlOne from './prodExample1/rawHtml';
import expectedBlocksOne from './prodExample1/expectedBlocks';
import rawHtmlTwo from './prodExample2/rawHtml';
import expectedBlocksTwo from './prodExample2/expectedBlocks';
import { BlockObjectRequestType } from '../src/lib/type/blockObjectRequests';

describe('NotionParser', () => {
  describe('exception cases', () => {
    it('it should ignore parsing the tag if its blockType was undefined', () => {
      const testHtml = '<div>correct tag<audio>incorrect tag</audio></div>';
      expect(parseHtmlToNotionBlocks(testHtml)).toStrictEqual([
        {
          object: 'block',
          paragraph: {
            rich_text: [{ text: { content: 'correct tag' }, type: 'text' }]
          },
          type: 'paragraph'
        }
      ] satisfies BlockObjectRequestType[]);
    });
    it('it should ignore parsing the tag if its blockType was undefined', () => {
      const testHtml = '<div>correct tag</div><audio>incorrect tag</audio>';
      expect(parseHtmlToNotionBlocks(testHtml)).toStrictEqual([
        {
          object: 'block',
          paragraph: {
            rich_text: [{ text: { content: 'correct tag' }, type: 'text' }]
          },
          type: 'paragraph'
        }
      ] satisfies BlockObjectRequestType[]);
    });
  });
  describe('compound blocks', () => {
    it('should parse nested tags to flat blocks', () => {
      const testHtml = '<div>content1<p>content2</p>content3</div>';
      expect(parseHtmlToNotionBlocks(testHtml)).toStrictEqual([
        {
          object: 'block',
          paragraph: {
            rich_text: [{ text: { content: 'content1' }, type: 'text' }]
          },
          type: 'paragraph'
        },
        {
          object: 'block',
          paragraph: {
            rich_text: [{ text: { content: 'content2' }, type: 'text' }]
          },
          type: 'paragraph'
        },
        {
          object: 'block',
          paragraph: {
            rich_text: [{ text: { content: 'content3' }, type: 'text' }]
          },
          type: 'paragraph'
        }
      ] satisfies BlockObjectRequestType[]);
    });
    it('should parse a multiple paragraph blocks', () => {
      const testHtml = '<div><p>text1</p><p>text2</p><div>text3</div></div>';
      expect(parseHtmlToNotionBlocks(testHtml)).toStrictEqual([
        {
          object: 'block',
          paragraph: {
            rich_text: [{ text: { content: 'text1' }, type: 'text' }]
          },
          type: 'paragraph'
        },
        {
          object: 'block',
          paragraph: {
            rich_text: [{ text: { content: 'text2' }, type: 'text' }]
          },
          type: 'paragraph'
        },
        {
          object: 'block',
          paragraph: {
            rich_text: [{ text: { content: 'text3' }, type: 'text' }]
          },
          type: 'paragraph'
        }
      ]);
    });

    it('should parse multiple elements type', () => {
      const testHtml =
        '<div><h1>Title</h1><p>text text42.</p><p>Another text</p></div>';
      expect(parseHtmlToNotionBlocks(testHtml)).toStrictEqual([
        {
          object: 'block',
          heading_1: {
            rich_text: [{ text: { content: 'Title' }, type: 'text' }]
          },
          type: 'heading_1'
        },
        {
          object: 'block',
          paragraph: {
            rich_text: [
              { text: { content: 'text text42.' }, type: 'text' }
            ]
          },
          type: 'paragraph'
        },
        {
          object: 'block',
          paragraph: {
            rich_text: [{ text: { content: 'Another text' }, type: 'text' }]
          },
          type: 'paragraph'
        }
      ]);
    });
  });
  describe('annotations', () => {
    xdescribe('span', () => {
      it('should parse span as rich_text', () => {
        const testHtml =
          '<p>text1<span>text2</span>text3</p>';
        expect(parseHtmlToNotionBlocks(testHtml)).toStrictEqual([
          {
            object: 'block',
            paragraph: {
              rich_text: [
                { text: { content: 'text1' }, type: 'text' },
                { text: { content: 'text2' }, type: 'text' },
                { text: { content: 'text3' }, type: 'text' }
              ]
            },
            type: 'paragraph'
          }
        ]);
      });
      it('should ignore empty span', () => {
        const testHtml =
          '<p><span>text2</span>text3<span></span></p>';
        expect(parseHtmlToNotionBlocks(testHtml)).toStrictEqual([
          {
            object: 'block',
            paragraph: {
              rich_text: [
                { text: { content: 'text2' }, type: 'text' },
                { text: { content: 'text3' }, type: 'text' }
              ]
            },
            type: 'paragraph'
          }
        ]);
      });
      xit('should parse orphan span as paragraph block', () => {
        const testHtml =
          '<span>text1</span>';
        expect(parseHtmlToNotionBlocks(testHtml)).toStrictEqual([
          {
            object: 'block',
            paragraph: {
              rich_text: [
                { text: { content: 'text1' }, type: 'text' }
              ]
            },
            type: 'paragraph'
          }
        ]);
      });
    });
    xit('should parse links to paragraphs', () => {
      const testHtml = '<a href="https://notion.so">Click here</a>';
      expect(parseHtmlToNotionBlocks(testHtml)).toStrictEqual([
        {
          object: 'block',
          paragraph: {
            rich_text: [
              {
                text: {
                  content: 'Click here'
                },
                type: 'text'
              }
            ]
          },
          type: 'paragraph'
        }
      ]);
    });
  });
  describe('simple blocks', () => {
    describe('br', () => {
      it('should ignore br tag before or after empty text', () => {
        const testHtml = '<p><br/>HelloWorld<br/></p>';
        expect(parseHtmlToNotionBlocks(testHtml)).toStrictEqual([
          {
            type: 'paragraph',
            object: 'block',
            paragraph: {
              rich_text: [{
                type: 'text',
                text: {
                  content: 'HelloWorld'
                }
              }]
            }
          }
        ] satisfies BlockObjectRequestType[]);
      });
      it('should add a line break and push them to rich_text array if br tag appears', () => {
        const testHtml = '<p>Hello<br/>World</p>';
        expect(parseHtmlToNotionBlocks(testHtml)).toStrictEqual([
          {
            type: 'paragraph',
            object: 'block',
            paragraph: {
              rich_text: [{
                type: 'text',
                text: {
                  content: 'Hello'
                }
              }, {
                type: 'text',
                text: {
                  content: '\nWorld'
                }
              }]
            }
          }
        ] satisfies BlockObjectRequestType[]);
      });
      it('should ignore continuous br tags', () => {
        const testHtml = '<p>Hello<br/><br/>World</p>';
        expect(parseHtmlToNotionBlocks(testHtml)).toStrictEqual([
          {
            type: 'paragraph',
            object: 'block',
            paragraph: {
              rich_text: [{
                type: 'text',
                text: {
                  content: 'Hello'
                }
              }, {
                type: 'text',
                text: {
                  content: '\nWorld'
                }
              }]
            }
          }
        ] satisfies BlockObjectRequestType[]);
      });
    });
    it('should parse divs', () => {
      const testHtml = '<div>div text </div>';
      expect(parseHtmlToNotionBlocks(testHtml)).toStrictEqual([
        {
          type: 'paragraph',
          object: 'block',
          paragraph: {
            rich_text: [{
              type: 'text', text: {
                content: 'div text'
              }
            }]
          }
        }
      ]satisfies BlockObjectRequestType[]);
    });
    it('should parse paragraphs', () => {
      const testHtml = '<p>text content</p>';
      expect(parseHtmlToNotionBlocks(testHtml)).toStrictEqual([
        {
          object: 'block',
          paragraph: {
            rich_text: [{ text: { content: 'text content' }, type: 'text' }]
          },
          type: 'paragraph'
        }
      ]);
    });

    it('should parse headings', () => {
      const testHtml =
        '<h1>text content</h1><h2>text content</h2><h3>text content</h3><h4>text content</h4><h5>text content</h5><h6>text content</h6>';
      const expectedBlocks = [
        {
          object: 'block',
          heading_1: {
            rich_text: [{ text: { content: 'text content' }, type: 'text' }]
          },
          type: 'heading_1'
        },
        {
          object: 'block',
          heading_2: {
            rich_text: [{ text: { content: 'text content' }, type: 'text' }]
          },
          type: 'heading_2'
        },
        {
          object: 'block',
          heading_3: {
            rich_text: [{ text: { content: 'text content' }, type: 'text' }]
          },
          type: 'heading_3'
        },
        {
          object: 'block',
          heading_3: {
            rich_text: [{ text: { content: 'text content' }, type: 'text' }]
          },
          type: 'heading_3'
        },
        {
          object: 'block',
          heading_3: {
            rich_text: [{ text: { content: 'text content' }, type: 'text' }]
          },
          type: 'heading_3'
        },
        {
          object: 'block',
          heading_3: {
            rich_text: [{ text: { content: 'text content' }, type: 'text' }]
          },
          type: 'heading_3'
        }
      ];
      expect(parseHtmlToNotionBlocks(testHtml)).toStrictEqual(expectedBlocks);
    });

    xit('should handle HTML found in production', () => {
      console.log(JSON.stringify(parseHtmlToNotionBlocks(rawHtmlOne).map(value => ({
        type: value.type,
        object: value.object,
        // @ts-ignore
        ...value[value.type]
      }))));
      console.log(JSON.stringify(expectedBlocksOne.map((value => ({
        type: value.type,
        object: value.object,
        // @ts-ignore
        ...value[value.type]
      })))));
      expect(parseHtmlToNotionBlocks(rawHtmlOne)).toStrictEqual(
        expectedBlocksOne
      );
      expect(parseHtmlToNotionBlocks(rawHtmlTwo)).toStrictEqual(
        expectedBlocksTwo
      );
    });
  });
});
