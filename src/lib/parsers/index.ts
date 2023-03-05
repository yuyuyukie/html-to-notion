import { BuildingBlock } from '../models';
import { RichText, RichTextItemRequest } from '../type/redefinitions';
import { cloneDeep } from 'lodash';

abstract class ContentParser {
  protected addRichText(rich_text: RichTextItemRequest[], addingRichText: RichText):RichTextItemRequest[] {
    const lastElement = rich_text[rich_text.length - 1];
    const r = cloneDeep(rich_text);
    const a = cloneDeep(addingRichText)
    if(lastElement && lastElement.type === "text" && lastElement.text.content === "\n"){
      a.text.content = `\n${a.text.content}`
      r.pop();
    }
    r.push(a)
    return r;
  }
  public abstract parse(
    richText: RichText, buildingBlock?: BuildingBlock
  ): BuildingBlock | undefined;
}

export default ContentParser;
