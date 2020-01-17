<?php

namespace TreeDevs\Crud\Helper;

use Magento\Framework\App\Helper\AbstractHelper;

class Data extends AbstractHelper
{
    /**
     * @var \Magento\Framework\App\Http\Context
     */
    private $httpContext;
    protected $_productloader;

    public function __construct(
        \Magento\Framework\App\Helper\Context $context,
        \Magento\Framework\App\Http\Context $httpContext,
        \Magento\Catalog\Model\ProductFactory $_productloader
    )
    {
        parent::__construct($context);
        $this->httpContext = $httpContext;
        $this->_productloader = $_productloader;
    }

    public function isLoggedIn()
    {
        $isLoggedIn = $this->httpContext->getValue(\Magento\Customer\Model\Context::CONTEXT_AUTH);
        return $isLoggedIn;
    }

    public function getLoadProduct($id)
    {
        $product = $this->_productloader->create()->load($id);
        //return $product->getId();
        return $product->getData('image');
    }


}