<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
<xsl:output method="text" media-type="text/js" />
<xsl:template match="/">
  <xsl:for-each select="*/eClassifiers">
    <xsl:result-document method="text" href="../WAML\{@name}.ts">
    <xsl:if test="@xsi:type='ecore:EClass'">
/** Generated Code
* emf ecore to javascript
* generated at <xsl:value-of  select="current-dateTime()"/>
* (C) XSLT ecore2ts - Kai Biermeier
**/
<xsl:variable name="className" select="@name"/>
<xsl:for-each select="distinct-values(eStructuralFeatures/@eType|@eSuperTypes)"><xsl:if test="not(.=concat('#//', $className))">import { <xsl:call-template name="substring-after-last"><xsl:with-param name="string" select="." /><xsl:with-param name="delimiter" select="'//'" /></xsl:call-template> } from './<xsl:call-template name="substring-after-last"><xsl:with-param name="string" select="." /><xsl:with-param name="delimiter" select="'//'" /></xsl:call-template>';
</xsl:if>
</xsl:for-each>
<xsl:if test="@name='Element'">import { RuntimeUIModelBase } from '../runtime-uimodel-base';
</xsl:if>
export class <xsl:value-of select="@name"/> <xsl:if test="@eSuperTypes"> extends <xsl:call-template name="substring-after-last"><xsl:with-param name="string" select="@eSuperTypes" /><xsl:with-param name="delimiter" select="'//'" /></xsl:call-template></xsl:if><xsl:if test="@name='Element'"> extends RuntimeUIModelBase</xsl:if>{
  public type = '<xsl:value-of select="@name"/>';
  public eClass: string;
  public $ref: string;
  <xsl:for-each select="eStructuralFeatures">
  // Type: <xsl:value-of select="@eType"/>
  public <xsl:value-of select="@name"/>: <xsl:call-template name="substring-after-last"><xsl:with-param name="string" select="@eType" /><xsl:with-param name="delimiter" select="'//'" /></xsl:call-template><xsl:if test="@upperBound>1 or @upperBound=-1">[]</xsl:if>;
</xsl:for-each>
}
    </xsl:if>
    <xsl:if test="@xsi:type='ecore:EEnum'">
/** Generated Code
  * emf ecore to javascript
  * created at <xsl:value-of  select="current-dateTime()"/>
  * (C) Kai Biermeier
  **/
export enum <xsl:value-of select="@name"/> {
  <xsl:for-each select="eLiterals">
    <xsl:value-of select="@name"/><xsl:if test="not(position() = last())">, </xsl:if>
  </xsl:for-each>
}
    </xsl:if>
    </xsl:result-document>
  </xsl:for-each>
  <xsl:result-document method="text" href="../WAML\EInt.ts">
export type EInt = number;
  </xsl:result-document>
    <xsl:result-document method="text" href="../WAML\EString.ts">
export type EString = string;
  </xsl:result-document>
  <xsl:result-document method="text" href="../WAML\EBoolean.ts">
export type EBoolean = boolean;
  </xsl:result-document>
</xsl:template>
<!-- https://stackoverflow.com/questions/9078779/getting-a-substring-after-the-last-occurrence-of-a-character-in-xslt -->
<xsl:template name="substring-after-last">
    <xsl:param name="string" />
    <xsl:param name="delimiter" />
    <xsl:choose>
      <xsl:when test="contains($string, $delimiter)">
        <xsl:call-template name="substring-after-last">
          <xsl:with-param name="string"
            select="substring-after($string, $delimiter)" />
          <xsl:with-param name="delimiter" select="$delimiter" />
        </xsl:call-template>
      </xsl:when>
      <xsl:otherwise><xsl:value-of
                  select="$string" /></xsl:otherwise>
    </xsl:choose>
  </xsl:template>
</xsl:stylesheet>
