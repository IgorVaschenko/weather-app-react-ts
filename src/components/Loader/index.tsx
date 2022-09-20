import { Loader, LoaderWrap } from 'components/Loader/components'

const LOADER_SIZE = 100

export default () => {
  return (
    <LoaderWrap>
      <Loader
        height={LOADER_SIZE}
        width={LOADER_SIZE}
        color="#AC5843"
        ariaLabel="loading"
        secondaryColor='gray'
      />
    </LoaderWrap>
  )
}
