package br.univel.dao;

import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import br.univel.model.categoria;

/**
 *  DAO for categoria
 */
@Stateless
public class categoriaDao
{
   @PersistenceContext(unitName = "SystemaCalcados-persistence-unit")
   private EntityManager em;

   public void create(categoria entity)
   {
      em.persist(entity);
   }

   public void deleteById(Long id)
   {
      categoria entity = em.find(categoria.class, id);
      if (entity != null)
      {
         em.remove(entity);
      }
   }

   public categoria findById(Long id)
   {
      return em.find(categoria.class, id);
   }

   public categoria update(categoria entity)
   {
      return em.merge(entity);
   }

   public List<categoria> listAll(Integer startPosition, Integer maxResult)
   {
      TypedQuery<categoria> findAllQuery = em.createQuery("SELECT DISTINCT c FROM categoria c ORDER BY c.id", categoria.class);
      if (startPosition != null)
      {
         findAllQuery.setFirstResult(startPosition);
      }
      if (maxResult != null)
      {
         findAllQuery.setMaxResults(maxResult);
      }
      return findAllQuery.getResultList();
   }
}
