import { ClipLoader } from 'react-spinners'

interface iSpinner {
    override: any
    isLoading?: boolean
}
const Spinner = ({ override, isLoading }: iSpinner) => {
    return (
        <ClipLoader
            color={'darkblue'}
            loading={isLoading}
            cssOverride={override}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
    )
}

export default Spinner