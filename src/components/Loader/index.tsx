import theme from 'theme/theme'

import { Loader, LoaderWrap } from 'components/Loader/components'

const LOADER_SIZE = 150

export default () => {
  return (
    <LoaderWrap>
      <Loader
        height={LOADER_SIZE}
        width={LOADER_SIZE}
        color={theme.colors.firstLoader}
        secondaryColor={theme.colors.secondtLoader}
      />
    </LoaderWrap>
  )
}
