export const getAuthorProperties = (primaryAuthor) => {
    let authorProfiles = []

    authorProfiles.push(
        primaryAuthor.website ? primaryAuthor.website : null,
        primaryAuthor.twitter ? `https://twitter.com/${primaryAuthor.twitter.replace(/^@/, ``)}/` : null,
        primaryAuthor.facebook ? `https://www.facebook.com/${primaryAuthor.facebook.replace(/^\//, ``)}/` : null
    )

    authorProfiles = authorProfiles.filter(profile => profile);

    return {
        name: primaryAuthor.name || null,
        sameAsArray: authorProfiles.length ? `["${authorProfiles.join('", "')}"]` : null,
        image: primaryAuthor.profile_image || null,
        facebookUrl: primaryAuthor.facebook ? `https://www.facebook.com/${primaryAuthor.facebook.replace(/^\//, ``)}/` : null,
    }
}

export default getAuthorProperties
