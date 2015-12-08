package br.univel.dao;

import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import br.univel.model.formapagamento;

/**
 *  DAO for formapagamento
 */
@Stateless
public class formapagamentoDao
{
   @PersistenceContext(unitName = "SystemaCalcados-persistence-unit")
   private EntityManager em;

   public void create(formapagamento entity)
   {
      em.persist(entity);
   }

   public void deleteById(Long id)
   {
      formapagamento entity = em.find(formapagamento.class, id);
      if (entity != null)
      {
         em.remove(entity);
      }
   }

   public formapagamento findById(Long id)
   {
      return em.find(formapagamento.class, id);
   }

   public formapagamento update(formapagamento entity)
   {
      return em.merge(entity);
   }

   public List<formapagamento> listAll(Integer startPosition, Integer maxResult)
   {
      TypedQuery<formapagamento> findAllQuery = em.createQuery("SELECT DISTINCT f FROM formapagamento f ORDER BY f.id", formapagamento.class);
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
