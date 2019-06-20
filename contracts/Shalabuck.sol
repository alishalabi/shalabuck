pragma solidity ^0.5.0;

/// @title A custom ERC721 compliant token (non-fungible)
/// @author Ali A. Shalabi

import "../node_modules/openzeppelin-solidity/contracts/token/ERC721/ERC721Full.sol";
import "../node_modules/openzeppelin-solidity/contracts/ownership/Ownable.sol";
import "./Metadata.sol";


contract Shalabuck is ERC721Full, Ownable {
  address public metadata;

  constructor()
}
