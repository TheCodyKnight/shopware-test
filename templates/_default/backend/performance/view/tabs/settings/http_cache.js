/**
 * Shopware 4.0
 * Copyright © 2012 shopware AG
 *
 * According to our dual licensing model, this program can be used either
 * under the terms of the GNU Affero General Public License, version 3,
 * or under a proprietary license.
 *
 * The texts of the GNU Affero General Public License with an additional
 * permission and of our proprietary license can be found at and
 * in the LICENSE file you have received along with this program.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * "Shopware" is a registered trademark of shopware AG.
 * The licensing of the program under the AGPLv3 does not imply a
 * trademark license. Therefore any rights, title and interest in
 * our trademarks remain entirely with us.
 *
 * @category   Shopware
 * @package    Customer
 * @subpackage Detail
 * @copyright  Copyright (c) 2012, shopware AG (http://www.shopware.de)
 * @version    $Id$
 * @author shopware AG
 */

//{namespace name=backend/performance/main}

/**
 * SEO fieldSet for
 */
//{block name="backend/performance/view/tabs/settings/http_cache"}
Ext.define('Shopware.apps.Performance.view.tabs.settings.HttpCache', {
    /**
     * Define that the base field set is an extension of the "Base" fieldSet
     * @string
     */
    extend:'Shopware.apps.Performance.view.tabs.settings.Base',

    /**
     * List of short aliases for class names. Most useful for defining xtypes for widgets.
     * @string
     */
    alias:'widget.performance-tabs-settings-http-cache',

    /**
     * Description of the fieldSet
     */
    title: '{s name=tabs/settings/http_cache/title}HTTP Cache{/s}',

    layout: 'anchor',

    /**
     * Expand this fieldSet
     */
    collapsed: false,

    /**
     * Component event method which is fired when the component
     * is initials. The component is initials when the user
     * want to create a new customer or edit an existing customer
     * @return void
     */
    initComponent:function () {
        var me = this;

        me.items = me.getItems();
        me.callParent(arguments);

    },

    getItems: function() {
        var me = this;

        return [
            me.createDecriptionContainer("Allgemeine Beschreibung für das HTTPCache-Modul <br>" +
            "<br>" +
            "<b>Wichtig: </b> Informationen"),
        {
            xtype: 'performance-tabs-settings-elements-cache-time',
            height: 250,
            margin: '0 0 20 0'
        }, {
            xtype: 'performance-tabs-settings-elements-no-cache',
            height: 250,
            margin: '0 0 20 0'
        }, {
            fieldLabel: 'Proxy-BAN aktivieren',
            name: 'httpCache[proxyBan]',
            xtype: 'checkbox',
            uncheckedValue: false,
            inputValue:true
        }, {
            fieldLabel: 'Alternative Proxy-Url',
            name: 'httpCache[proxy]',
            xtype: 'textfield'
        }, {
            fieldLabel: 'Admin-View',
            name: 'httpCache[admin]',
            xtype: 'checkbox',
            uncheckedValue: false,
            inputValue:true
        }];

    }



});
//{/block}
