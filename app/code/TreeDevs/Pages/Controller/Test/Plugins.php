<?php
namespace TreeDevs\Pages\Controller\Test;

class Plugins extends \Magento\Framework\App\Action\Action
{
	protected $resultPageFactory;

	public function __construct(
		\Magento\Framework\App\Action\Context $context,
		\Magento\Framework\View\Result\PageFactory $resultPageFactory)
	{
        $this->_resultPageFactory = $resultPageFactory;
        parent::__construct($context);
	}

	public function execute()
	{
        $resultPage = $this->_resultPageFactory->create();
        return $resultPage;
	}
}
