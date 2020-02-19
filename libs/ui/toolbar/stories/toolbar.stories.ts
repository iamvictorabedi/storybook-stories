import {storiesOf} from "@storybook/angular";
import {BasicToolbar} from "./basic/basic-toolbar.story";
import {MatToolbarModule} from "@angular/material/toolbar";

storiesOf('Toolbar', module)
  .add('basic', ()=> ({
    moduleMetadata: { imports: [MatToolbarModule], declarations: [BasicToolbar] },
    component: BasicToolbar,
    props: {}
  }));
