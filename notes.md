# Sharing M3 content with Partners

## Approach
The proposal is to utilise the Oauth 2.0 standard to share specific pieces of M3 content in a secure way without partner users needing to register with M3.

Principles of approach:
* Partner users do not need to register with M3
* Partner users will only have access to specific agreed pieces of content, they are not logging into M3 sites
* Agreed set of profile information is shared for reporting purposes, but never enough to personally identify someone

## Simplified Overview of Flow
![Oauth simplified flow](./oauthsimple.png "Oauth simplified flow")

## Header/Footer (optional extra)
If it is desired for partner users to "feel" like they are still on partner systems, partners can provide a header and footer to frame the M3 content.

This also provides the users a means to getback to the partner website.

If the header is personalised for example has their name on it then the partner should provide endpoints which will return the correct html to be injected into the page:

`https://parternersite.com/api/header`

`https://partnersite.com/api/footer`

Alternatively if the header/footer are static and the same for all users, the partner can supply M3 the html blob to be inserted on the page, with no endpoints neccesary.