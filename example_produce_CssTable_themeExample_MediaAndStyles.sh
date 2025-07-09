#!/usr/bin/env bash

# CssTable2 .theme_example

./produceSitesTool_MediaAndStyles_base.sh \
    --sitesTool_ThemeName=theme_example \
    --sitesToolName=CssTable2 \
    --cssOrJsTool=css \
    --template="data/templates/responsive_size__mini_example_overrides_data.css.template" \
    --templateDataMethodName="getTemplateDataOverridden" \
    --withSizesCssConstants=true \
    --withConstantsImportLine=true





