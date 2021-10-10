import ghpages from 'gh-pages';

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/flacial/image-uploader', // Update to point to your repository  
        user: {
            name: 'flacial', // update to use your name
            email: 'ruthemiumwithdiamond@protonmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)