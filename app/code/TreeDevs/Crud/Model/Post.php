<?php
namespace TreeDevs\Crud\Model;
class Post extends \Magento\Framework\Model\AbstractModel implements \Magento\Framework\DataObject\IdentityInterface
{
	const CACHE_TAG = 'treedevs_helloworld_post';

	protected $_cacheTag = 'treedevs_helloworld_post';

	protected $_eventPrefix = 'treedevs_helloworld_post';

	protected function _construct()
	{
		$this->_init('TreeDevs\Crud\Model\ResourceModel\Post');
	}

	public function getIdentities()
	{
		return [self::CACHE_TAG . '_' . $this->getId()];
	}

	public function getDefaultValues()
	{
		$values = [];

		return $values;
	}
}