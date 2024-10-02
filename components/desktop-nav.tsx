import Link from 'next/link'
import { FILENAV_ELEMENTS } from '@/constants'
import { File, Folder, Tree } from '@/components/ui/file-tree'

export const DesktopNav = () => {
  return (
    <div className='fixed z-50 w-full flex-col'>
      <div className='flex flex-col items-center justify-center overflow-hidden'>
        <Tree
          className='overflow-hidden rounded-md p-2'
          initialExpandedItems={['1', '2', '9', '10', '14', '18']}
          elements={FILENAV_ELEMENTS}
        >
          <Folder element='src' value='1'>
            <Folder value='2' element='app'>
              <File value='3'>
                <Link href='/'>page.tsx</Link>
              </File>
              <File value='4'>
                <Link href='/'>about-me.tsx</Link>
              </File>
              <File value='5'>
                <Link href='/'>skills.tsx</Link>
              </File>
              <File value='6'>
                <Link href='/projects'>projects.tsx</Link>
              </File>
              <File value='7'>
                <Link href='/'>education.tsx</Link>
              </File>
              <File value='8'>
                <Link href='/'>contact.tsx</Link>
              </File>
            </Folder>
            <Folder value='9' element='components'>
              <Folder value='10' element='[blogs]'>
                <File value='11'>
                  <p>HelloWorld.mdx</p>
                </File>
                <File value='12'>
                  <p>Working-in-next.mdx</p>
                </File>
                <File value='13'>
                  <p>Welcome-to-my-blog.mdx</p>
                </File>
              </Folder>
              <Folder value='14' element='[projects]'>
                <File value='15'>
                  <p>visualizer.exe</p>
                </File>
                <File value='16'>
                  <p>inventory-manager.exe</p>
                </File>
                <File value='17'>
                  <p>cashflowe.exe</p>
                </File>
              </Folder>
            </Folder>
            <Folder value='18' element='lib'>
              <File value='19' isSelectable={false}>
                <p>dark-mode.ts</p>
              </File>
            </Folder>
          </Folder>
        </Tree>
      </div>
    </div>
  )
}
