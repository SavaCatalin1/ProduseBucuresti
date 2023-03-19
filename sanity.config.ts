import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import Logo from './components/Logo';
import StudioNavbar from './components/StudioNavbar';
import {schemaTypes} from './schemas'
import { myTheme } from './theme';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  basePath: "/studio",
  name: 'Mano',
  title: 'Mano Studio',
  projectId,
  dataset,

  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
  studio:{
    components:{
      logo: Logo,
      navbar: StudioNavbar
    }
  },
  theme: myTheme
})
