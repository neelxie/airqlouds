## Figma Designs

This project designs are here on [Figma](https://www.figma.com/file/9UegA93PBVLHvWesX633dZ/Airqo?node-id=0%3A1).

### Github

This project code resides here on [Github](https://github.com/neelxie/airqlouds).

## Issues 
Please Note, the project was undertaken as-is; this means that it was done as best as I could understand the requirements and the given resources(information) on how best to implement.

- Sample API Endpoint

The sample Endpoint takes is seen in 3 attributes which are way less than the documented attributes which are 7. Of the 3 attributes of the Sample API endpoint the `admin-level` attribute is inclusive which is omitted from the documented attributes. This raises questions of whether the `admin-level` is anyone creating the AirQloud but that would raise the issue of creating an Airqloud for a district or city, what safe guards in place to manage authorisations. I believe having an understanding of this would help best plan and design the User Interface and ultimately the Frontend.

- Authorisations
The endpoint required authorisation to be accessed, no information was shared on how best acquire the necessary authorisation for a full endpoint integration.

- Attributes
Some of the shared attributes lacked sufficient details on what they are, their data types, their sources and accepted formats for both the Frontend and usage in the API Endpoint.

- Point of Confusion
One attribute was `Name` and another was a derivative of Name called `long_name`. That bred confusion on why both exist and only the long_name appeared in the Sample Endpoint. Designing for an API Data model preference would be having one attribute that gets sanitized and validated before usage.

Center_Point was also a source of confused as it is unclear on how to get the center_point, whether it would have been gotten after saving the given coordinates and plotting a center or it would be randomly picked as the AirQloud is being picked.

Alot more issues arose and this is a representation of how best I understood the assessment and what was required given the details shared.

## Shortcomings

- I unable to acquire a google Maps key as I have previously my credits and have a pending bill but with a google maps key, the map works seamlessly.

