Finish coding simple application retrieving food fact information from https://world.openfoodfacts.org/api/v0/product/XXX.json with a GET request where XXX is a barcode string, no additional headers required

Files requiring modification: app.component.ts, app.module.ts, app.service.ts

No additional import statements should be needed

Barcode to retrieve info for: 737628064502

Response object field to display: product.generic_name_en i.e.
{
     product: {
        generic_name_en: 'Food Name'
    }
}

When complete, should display "Name: Rice Noodles" at the top