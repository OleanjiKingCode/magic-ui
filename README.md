# BOLT - Empowering Blockchain Game Development

## SubTitle
A Framework for Permissionless, Composable, and Everlasting Onchain Games

## Properties
1. **Entity Component System (ECS) Architecture:** BOLT utilizes an ECS pattern for organizing code and data, promoting modularity and extendibility in blockchain game development.
2. **SVM-Compatible Acceleration Layer:** Enhance the performance of fully onchain (FOC) games on Solana with an acceleration layer, bringing it on par with traditional multiplayer game servers.
3. **BOLT CLI:** An extension of the Anchor framework, BOLT CLI simplifies the development process by providing functionalities for creating world instances, components, and systems.
4. **Onchain Framework:** BOLT is designed to create games that are fully onchain, permissionless, and composable, ensuring they can live forever on the blockchain.
5. **World Program and TypeScript SDK:** The World Program serves as the entry point for creating world instances, entities, attaching components, and executing systems. The TypeScript SDK provides a convenient interface for interacting with BOLT.

## Getting Started
1. **Installation:**
   - Install BOLT CLI: `npm install @magicblock-labs/bolt-cli`
   - Verify installation: `bolt -h`
2. **Initialize Your Project:**
   - Create a new workspace: `bolt init <new-workspace-name>`
3. **Components:**
   - Define components using the #[component] macro, such as the Position component example provided.
4. **Systems:**
   - Implement systems that perform game logic on components. Systems operate on entities with specific sets of components.
5. **World Program:**
   - Install BOLT SDK: `npm install @magicblock-labs/bolt-sdk --save-dev`
   - Create a world instance, add entities, attach components, and execute systems using the TypeScript SDK.
6. **Example Extension:**
   - Extend your game by introducing new components and systems. For instance, add a Velocity component and a system_apply_velocity system to modify the Position component, showcasing the flexibility and modularity of BOLT.
7. **Community Engagement:**
   - Join the BOLT community on Discord to share feedback, ask questions, and collaborate with other developers.
8. **Explore BOLT:**
   - Visit the BOLT documentation and start building your blockchain game with the power of an ECS pattern, ensuring a highly modular, efficient, and composable game development experience.

**Remember:** BOLT simplifies blockchain game development, allowing for dynamic customization and easy extension, making it an ideal framework for both beginners and experienced developers. Start building your decentralized games with BOLT and unleash the potential of onchain gaming!
