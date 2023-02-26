import { BuildingBlock } from '../models';
import { RichText, RichTextItemRequest } from '../type/redefinitions';

abstract class ContentParser {
  constructor(protected content: string) {}

  protected addRichText(rich_text: RichTextItemRequest[], addingRichText: RichText):RichTextItemRequest[] {
    console.log({ rich_text });
    const lastElement = rich_text[rich_text.length - 1];
    const r = [...rich_text];
    const a = {...addingRichText}
    if(lastElement && lastElement.type === "text" && lastElement.text.content === "\n"){
      a.text.content = `\n${a.text.content}`
      r.pop();
    }
    r.push(a)
    return r;
  }
  public abstract parse(
    buildingBlock?: BuildingBlock
  ): BuildingBlock | undefined;
}

export default ContentParser;
