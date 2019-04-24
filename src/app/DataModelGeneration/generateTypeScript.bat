cd "../WAML"
del *.ts
cd "../DataModelGeneration"
java -jar saxon9he.jar -s:WebAppML.ecore -xsl:ecore2ts.xslt outputdir=WAML
cd "../ContextML"
del *.ts
cd "../DataModelGeneration"
java -jar saxon9he.jar -s:ContextML.ecore -xsl:ecore2ts.xslt outputdir=ContextML
